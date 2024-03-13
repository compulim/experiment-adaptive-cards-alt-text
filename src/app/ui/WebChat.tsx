import './WebChat.css';

import { Components, createStore } from 'botframework-webchat';
import { type WebChatActivity } from 'botframework-webchat-core';
import { memo, useEffect, useMemo, useState } from 'react';

import createDirectLineEmulator from '../util/createDirectLineEmulator';

const { BasicWebChat, Composer } = Components;

type Props = Readonly<{ activities: readonly WebChatActivity[] }>;

function isInputElement(element: Element): element is HTMLInputElement {
  return element.tagName === 'INPUT';
}

function sleep(durationInMS = 100) {
  return new Promise(resolve => setTimeout(resolve, durationInMS));
}

export default memo(function Chat({ activities }: Props) {
  const [ready, setReady] = useState(false);
  const store = useMemo(
    () =>
      createStore({}, () => (next: (action: unknown) => unknown) => (action: { type: string }) => {
        if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
          setReady(true);
        }

        return next(action);
      }),
    [setReady]
  );

  const { directLine } = useMemo(() => createDirectLineEmulator({ store }), [store]);

  useEffect(() => {
    if (activities && ready) {
      const abortController = new AbortController();

      (async function () {
        await sleep(2_000);

        for (const activity of activities) {
          await sleep(100);

          directLine.emulateIncomingActivity(activity);
        }
      })();

      return () => abortController.abort();
    }

    return () => {};
  }, [activities, directLine, ready]);

  useEffect(() => {
    const abortController = new AbortController();

    (async function () {
      const { signal } = abortController;

      for (; !signal.aborted; ) {
        const { resolveAll } = await directLine.actPostActivity(() => {});

        if (signal.aborted) {
          break;
        }

        const echoBackActivity = await resolveAll();

        console.log(echoBackActivity);
      }
    })();

    return () => abortController.abort();
  }, [directLine]);

  useEffect(() => {
    const element = document.querySelector('[placeholder="Type your message"]');

    console.log({ element });

    element && isInputElement(element) && element.focus();
  }, []);

  return (
    <div className="chat">
      <Composer directLine={directLine} store={store}>
        <BasicWebChat />
      </Composer>
    </div>
  );
});
