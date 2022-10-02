"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onAuthStateChangedListener = exports.signOutUser = exports.signInAuthUserWithEmailAndPassword = exports.createAuthUserWithEmailAndPassword = exports.createUserDocumentFromAuth = exports.db = exports.signInWithGooglePopup = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _firestore = require("firebase/firestore");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var googleProvider = new _auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});
var auth = (0, _auth.getAuth)();
exports.auth = auth;

var signInWithGooglePopup = function signInWithGooglePopup() {
  return (0, _auth.signInWithPopup)(auth, googleProvider);
};

exports.signInWithGooglePopup = signInWithGooglePopup;
var db = (0, _firestore.getFirestore)();
exports.db = db;

var createUserDocumentFromAuth = function createUserDocumentFromAuth(userAuth, additionalInformation) {
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
          return regeneratorRuntime.awrap((0, _firestore.setDoc)(userDocRef, _objectSpread({
            displayName: displayName,
            email: email,
            createdAt: createdAt
          }, additionalInformation)));

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

var createAuthUserWithEmailAndPassword = function createAuthUserWithEmailAndPassword(email, password) {
  return regeneratorRuntime.async(function createAuthUserWithEmailAndPassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!email || !password)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return");

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap((0, _auth.createUserWithEmailAndPassword)(auth, email, password));

        case 4:
          return _context2.abrupt("return", _context2.sent);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.createAuthUserWithEmailAndPassword = createAuthUserWithEmailAndPassword;

var signInAuthUserWithEmailAndPassword = function signInAuthUserWithEmailAndPassword(email, password) {
  return regeneratorRuntime.async(function signInAuthUserWithEmailAndPassword$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!(!email || !password)) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return");

        case 2:
          _context3.next = 4;
          return regeneratorRuntime.awrap((0, _auth.signInWithEmailAndPassword)(auth, email, password));

        case 4:
          return _context3.abrupt("return", _context3.sent);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.signInAuthUserWithEmailAndPassword = signInAuthUserWithEmailAndPassword;

var signOutUser = function signOutUser() {
  return (0, _auth.signOut)(auth);
};

exports.signOutUser = signOutUser;

var onAuthStateChangedListener = function onAuthStateChangedListener(callback) {
  return (0, _auth.onAuthStateChanged)(auth, callback);
};

exports.onAuthStateChangedListener = onAuthStateChangedListener;
//# sourceMappingURL=firebase.utils.dev.js.map
