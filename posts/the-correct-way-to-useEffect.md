---
title: "The Correct Way to useEffect"
date: "2023-02-11"
image: "/images/posts/nextjs_with_tailwind.png"
tags: ["useEffect", "React"]
---

> TLDR; only useEffect when you need to sync local state/data with outside data

I'm very sure that we have come accross this bug in our React project, where we have to spent quite alot of time in analyzing and dissecting the code piece by piece, line by line, and only to trace back that the issue rely solely on the useEffect block. Either we include the wrong state to the dependencies array or just simply the useEffect block executes a very weird and unexpected behavior. Yes, if you have encountered similar issues with me, maybe the next piece of advices will help you to solve it.

### You might not need to useEffect in the first place

The useEffect hook is a very awkward hook. It has all component lifecycle crunched into a single hook block. This can be very confusing and may leads to buggy code. So should we just don't use it? No, just don't abuse useEffect. `Use it only when we need to synchronize local component state with outside data.` Outside data can be props from parent components, result from data fetching, or context data from provider. Consider the following example

```jsx
const Component = () => {
  const [text, setText] = useState("Hello World");
  const { data, loading } = useQuery(SOME_FETCH_URL);

  // This can be better
  useEffect(() => {
    if (!loading) {
      setText(data.text);
    }
  }, [loading, data]);

  return (
    <div>
      <p>My Text: {text}</p>
    </div>
  );
};
```

The useQuery is a hook that will return the response data and a loading boolean. At the start of data fetching, the data is null and the loading is true, then when the fetch is done the data will be filled with the response result and the loading boolean will be come false. We wanted to set populate the text state with the result from the data, but we can only do so when the fetching is complete, that is why the useEffect is used in this case. But this usage is wrong. Because we don't need to use the useEffect, since react will do re-rendering when the data and loading is changed, so we can just used them right away in our render function.

```jsx
const Component = () => {
  // we remove this
  // const [text, setText] = useState("Hello World");
  const { data, loading } = useQuery(SOME_FETCH_URL);

  // and we remove this too
  // useEffect(() => {
  //   if (!loading) {
  //     setText(data.text);
  //   }
  // }, [loading, data]);

  return (
    <div>
      <p>My Text: {!loading && data !== null ? data : "Hello World"}</p>
    </div>
  );
};
```

This result is more concise and we no longer need to useEffect.

Well I know this example is too simple and sometimes when the project gets bigger, the component also get more complex. For example, the usage of context provider, many depending fetching, and complex UI. Here's what a complex component might look like.

```jsx
const Component = () => {
  // outside data
  const [ws] = useWebsocketProvider();
  const [userConfig, updateUserConfig] = useUserProvider();
  const [doSubscribe] = useMutation(SOME_QRAPHQL_MUTATION);
  const { data, loading } = useQuery(SOME_QRAPHQL_QUERY, {
    variables: {
      userId: userConfig.userId,
    },
  });

  // local state
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleSubscription = (res) => {
      setIsSubscribed(res.isSubscribe);
      updateUserConfig((prev) => {
        return { ...prev, subscription: res.isSubscribe };
      });
    };

    ws.on("userSubscription", handleSubscription);

    return () => {
      ws.off("userSubscription", handleSubscription);
    };
  }, [ws]);

  const handleSubscriptionClick = () => {
    doSubscribe({
      variables: {
        userId: userConfig.userId,
      },
    });
  };

  return (
    <div>
      <button onClick={handleSubscriptionClick}>Subscribe</button>
      <p>My Text: {text}</p>
    </div>
  );
};
```
