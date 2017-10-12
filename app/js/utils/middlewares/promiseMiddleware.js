/**
 * Promise middleware
 *
 * @return promise
 */

export default function promiseMiddleware(){
    return (next) => (action) => {
        const { promise, types, ...rest } = action;
        if (!promise) {
            return next(action);
        }
        const [REQUEST, SUCCESS, FAILED] = types;
        next({ ...rest, type: REQUEST });

        return promise
            .then((result) => {
                return next({ ...rest, result, type: SUCCESS })})
            
            .catch((error) => {
                // console.log('ERROR', error);
                return next({ ...rest, error, type: FAILED })});
    };
}
