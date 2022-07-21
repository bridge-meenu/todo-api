/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,
  'user/logout': 'is-logged-in',
  'user/getuser': 'is-logged-in',
  'user/updateuser': 'is-logged-in',
  'todo/addtodo': 'is-logged-in',
  'todo/gettodo': 'is-logged-in',
  'todo/getalltodos': 'is-logged-in',
  'todo/updatetodo': 'is-logged-in',
  'todo/deletetodo': 'is-logged-in',

};
