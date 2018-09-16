/**
 *
 * Asynchronously loads the component for AdminGroupForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
