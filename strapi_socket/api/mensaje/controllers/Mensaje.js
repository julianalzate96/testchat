'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {

    create: async (ctx) => {
      console.log(ctx.request.body)
        const data = await strapi.services.mensaje.create(ctx.request.body);
        // Send 201 `created`
        ctx.created(data);
        // NEW LINE: call our method emitToAllUsers and pass it body request
        strapi.emitToAllUsers(ctx.request.body);
      },
};
