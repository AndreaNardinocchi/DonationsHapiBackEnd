// import { db } from "../models/db.js";
// import { Request, ResponseToolkit } from "@hapi/hapi";
// import { User } from "../types/donation-types.js";

// export const accountsController = {
//   index: {
//     auth: false,
//     handler: function (request: Request, h: ResponseToolkit) {
//       return h.view("Main", { title: "Welcome to Donation" });
//     },
//   },
//   showSignup: {
//     auth: false,
//     handler: function (request: Request, h: ResponseToolkit) {
//       return h.view("Signup", { title: "Sign up for Donation" });
//     },
//   },
//   signup: {
//     auth: false,
//     handler: async function (request: Request, h: ResponseToolkit) {
//       const users = await db.userStore.find();
//       const user = request.payload;
//       // eslint-disable-next-line prefer-destructuring
//       let { email } = request.payload as any;
//       let exEmail = "";
//       // eslint-disable-next-line prefer-const
//       let existingEmail: any[] = [];
//       // eslint-disable-next-line no-shadow
//       users.forEach((user: { email: string }) => {
//         exEmail = user.email;
//         console.log("Existing email", exEmail);
//         existingEmail.push(exEmail);
//       });
//       let existingEmailNow = "";
//       for (let i = 0; i < existingEmail.length; i += 1) {
//         existingEmailNow = existingEmail[i];
//         if (existingEmail[i] === email) {
//           email = null;
//           return h.redirect("/");
//         }
//       }

//       await db.userStore.add(user);
//       return h.redirect("/");
//     },
//   },
//   showLogin: {
//     auth: false,
//     handler: function (request: Request, h: ResponseToolkit) {
//       return h.view("Login", { title: "Login to Donation" });
//     },
//   },
//   login: {
//     auth: false,
//     handler: async function (request: Request, h: ResponseToolkit) {
//       const { email, password } = request.payload as any;
//       const user = await db.userStore.findBy(email);
//       if (!user || user.password !== password) {
//         return h.redirect("/");
//       }
//       request.cookieAuth.set({ id: user._id });
//       return h.redirect("/donate");
//     },
//   },
//   logout: {
//     handler: function (request: Request, h: ResponseToolkit) {
//       request.cookieAuth.clear();
//       return h.redirect("/");
//     },
//   },

//   async validate(request: Request, session: any) {
//     const user = await db.userStore.findOne(session.id);
//     if (!user) {
//       return { isValid: false };
//     }
//     return { isValid: true, credentials: user };
//   },
// };

import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const accountsController = {
  index: {
    auth: false,
    handler: async function (request: Request, h: ResponseToolkit) {
      return h.view("main", { title: "Welcome to Donation" });
    },
  },
  showSignup: {
    auth: false,
    handler: async function (request: Request, h: ResponseToolkit) {
      return h.view("signup", { title: "Sign up for Donation" });
    },
  },
  signup: {
    auth: false,
    handler: async function (request: Request, h: ResponseToolkit) {
      const user = request.payload;
      await db.userStore.add(user);
      return h.redirect("/");
    },
  },
  showLogin: {
    auth: false,
    handler: async function (request: Request, h: ResponseToolkit) {
      return h.view("login", { title: "Login to Donation" });
    },
  },
  login: {
    auth: false,
    handler: async function (request: Request, h: ResponseToolkit) {
      const { email, password } = request.payload as any;
      const user = await db.userStore.findBy(email);
      if (!user || user.password !== password) {
        return h.redirect("/");
      }
      request.cookieAuth.set({ id: user._id });
      return h.redirect("/donate");
    },
  },
  logout: {
    handler: async function (request: Request, h: ResponseToolkit) {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },

  async validate(request: Request, session: any) {
    const user = await db.userStore.findOne(session.id);
    if (!user) {
      return { isValid: false };
    }
    return { isValid: true, credentials: user };
  },
};
