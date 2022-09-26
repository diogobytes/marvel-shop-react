"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserDocumentFromAuth = exports.db = exports.signInWithGooglePopup = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _firestore = require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyA5Al7yntpvg4GqCeSKCzgERw-wiCbhvi0",
  authDomain: "marvel-comics-shop-db.firebaseapp.com",
  projectId: "marvel-comics-shop-db",
  storageBucket: "marvel-comics-shop-db.appspot.com",
  messagingSenderId: "714492416397",
  appId: "1:714492416397:web:5d4914bfa81e58838f2dc4",
  measurementId: "G-5SE39MBWLC"
};
var firebaseApp = (0, _app.initializeApp)(firebaseConfig);
var provider = new _auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
var auth = (0, _auth.getAuth)();
exports.auth = auth;

var signInWithGooglePopup = function signInWithGooglePopup() {
  return (0, _auth.signInWithPopup)(auth, provider);
};

exports.signInWithGooglePopup = signInWithGooglePopup;
var db = (0, _firestore.getFirestore)();
exports.db = db;

var createUserDocumentFromAuth = function createUserDocumentFromAuth(userAuth) {
  var userDocRef, userSnapshot, displayName, email, createdAt;
  return regeneratorRuntime.async(function createUserDocumentFromAuth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userDocRef = (0, _firestore.doc)(db, 'users', userAuth.uid);
          console.log(userDocRef);
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _firestore.getDoc)(userDocRef));

        case 4:
          userSnapshot = _context.sent;

          if (userSnapshot.exists()) {
            _context.next = 16;
            break;
          }

          displayName = userAuth.displayName, email = userAuth.email;
          createdAt = new Date();
          _context.prev = 8;
          _context.next = 11;
          return regeneratorRuntime.awrap((0, _firestore.setDoc)(userDocRef, {
            displayName: displayName,
            email: email,
            createdAt: createdAt
          }));

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](8);
          console.log('error creating the user', _context.t0.message);

        case 16:
          return _context.abrupt("return", userDocRef);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[8, 13]]);
};

exports.createUserDocumentFromAuth = createUserDocumentFromAuth;
//# sourceMappingURL=firebase.utils.dev.js.map
