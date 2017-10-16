Fetch response check
--

A utility to check if a fetch response is 'ok'. Throws if 4xx, 5xx error is encountered.

Usage:

```javascript
import fetchResponseCheck from 'fetch-check-response';

fetch(url)
  .then(fetchResponseCheck)
  .then(res => res.json())
  .then(/* do stuff */)
  .catch(/* handle errors, including those from fetchResponseCheck */)
```