'use strict';

/**
 * Players.js controller
 *
 * @description: A set of functions called "actions" for managing `Players`.
 */

module.exports = {

  create: async (ctx) => {
    const data = await strapi.services.players.create(ctx.request.body);
    // Send 201 `created`
    ctx.created(data);
    // NEW LINE: call our method emitToAllUsers and pass it body request
    strapi.emitToAllUsers(ctx.request.body);
  },

};
