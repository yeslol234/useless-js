/**
 * useless.js
 * a framework that is just useless
 * @version 1.0.0
 * @date 2021-10-12
 * @lisence
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS.
 * IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * A function to add numbers
 * @param {number} a 1st Number to add.
 * @param {number} b 2nd Number to add.
 * @returns {number} a+b
 */
export function add(a,b) {
    return a+b;
}
/**
 * A function to subtract numbers
 * @param {number} a 1st Number to subtract.
 * @param {number} b 2nd Number to subtract.
 * @returns {number} you already know what it returns
 * 
 * why are you reading this bro
 */
export function sub(a,b) {
    return a-b;
}
/**
 * A function to multiply numbers
 * @param {number} a 1st Number to multiply.
 * @param {number} b 2nd Number to multiply.
 * @returns {number} returns a and b multiplied.
 * 
 * monke
 */
export function mul(a,b) {
    return a*b;
}
/**
 * it just divides stuff
 * A function to divide numbers
 * @param {number} a 1st Number to divide.
 * @param {number} b 2nd Number to divide.
 * @returns {number} returns a and b divided.
 * 
 * don't you dare divide by zero
 */
export function div(a,b) {
    return a/b;
}
/**
 * ```js
 * console.log(RandomInt(5,10))
 * ```
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Random Integer Given Between a and b.
 * 
 * ________________________________________
 */
export function RandomInt(a, b) {
    if (a > b) {
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

// end lol
