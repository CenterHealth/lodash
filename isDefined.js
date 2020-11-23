/**
 * Checks if `value` is not `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is not `undefined`, else `false`.
 * @example
 *
 * _.isDefined(void 0);
 * // => false
 *
 * _.isDefined(null);
 * // => true
 */
function isDefined(value) {
  return value !== undefined;
}

module.exports = isDefined;
