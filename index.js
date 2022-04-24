const PENDING = 'pending';
const FULFILED = 'fulfiled';
const REJECTED = 'rejected';
class MyPromise {
    constructor(actuator) {
        this._state = PENDING;
        this._value = undefined;
        try {
            /**
             * 执行器
             */
            actuator(this._resolve.bind(this),this._reject.bind(this));
        }catch(e) {
            this._reject(e);
        }

    }
    /**
     * 更改状态和值的函数
     * @param {*} value 新的值
     * @param {*} state 新的状态
     */
    _changeState(value,state) {
        if(this._state===PENDING) {
            this._value = value;
            this._state = state;
        }
    }
    /**
     * 
     * @param {*} data 已决阶段函数
     */
    _resolve(data) {
        this._changeState(data, FULFILED)
    }
    _reject(data) {
        this._changeState(data, REJECTED)
    }
}
let pro = new MyPromise((resolve,reject) => {
   resolve(1)

})
console.log(pro);