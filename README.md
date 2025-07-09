This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Firebase Setup and Google Sign-in

This section outlines the steps to set up Firebase for your project, including how to enable Google Sign-in.

### 1. Create a Firebase Project

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Click "Add project" or "Create a project".
3.  Follow the on-screen instructions to name your project and set up Google Analytics (optional).

### 2. Add Your App to Firebase

After creating the project, you need to add your application to it, whether it's a web, Android, or iOS app:

#### For Web Applications:

1.  In the Firebase Console, on the Project Overview page, click the "Web" icon (</>).
2.  Register your app, giving it a nickname. Hosting setup is optional.
3.  Firebase will provide you with a configuration object. Keep this safe, as you'll need it to initialize Firebase in your application.

#### For Android Applications:

1.  In the Firebase Console, on the Project Overview page, click the "Android" icon (the robot).
2.  Register your app by providing the `Android package name` (e.g., `com.yourcompany.yourapp`), `App nickname` (optional), and `SHA-1 signing certificate fingerprint` (optional, but recommended for Google Sign-in).
    *   **To get your SHA-1 fingerprint**:
        *   On Windows, open a command prompt and run: `keytool -exportcert -list -v -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore`
        *   On macOS/Linux, open a terminal and run: `keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore`
        *   The default password for `debug.keystore` is `android`.
3.  Download the `google-services.json` file. Place this file in your Android app module directory (usually `app/`).
4.  Add Firebase SDK to your `build.gradle` files:
    *   In your project-level `build.gradle` (`<project>/build.gradle`), add the Google Services plugin:
        ```gradle
        buildscript {
            repositories {
                google()
            }
            dependencies {
                // ... other dependencies
                classpath 'com.google.gms:google-services:4.4.1' // Check for the latest version
            }
        }
        ```
    *   In your app-level `build.gradle` (`<project>/<app-module>/build.gradle`), apply the plugin and add Firebase BoM (Bill of Materials) and other dependencies:
        ```gradle
        plugins {
            id 'com.android.application'
            // ... other plugins
            id 'com.google.gms.google-services' // Google Services plugin
        }

        android {
            // ...
        }

        dependencies {
            implementation(platform('com.google.firebase:firebase-bom:32.7.4')) // Check for the latest version
            implementation 'com.google.firebase:firebase-analytics' // Recommended for analytics
            implementation 'com.google.firebase:firebase-auth' // For authentication
            implementation 'com.google.android.gms:play-services-auth:21.0.0' // For Google Sign-in
            // ... other dependencies
        }
        ```
5.  Sync your project with Gradle files.

### 3. Enable Google Sign-in

To enable users to sign in with their Google accounts:

1.  In the Firebase Console, navigate to "Authentication" from the left menu.
2.  Go to the "Sign-in method" tab.
3.  Find "Google" in the list of sign-in providers and click the pencil icon to edit it.
4.  Toggle the "Enable" switch to ON.
5.  (Optional) Provide a public-facing name for your app and a project support email.
6.  Click "Save".

### 4. Install Firebase SDK and Initialize in Your Project

#### For Web Applications:

First, install the Firebase SDK in your project:

```bash
npm install firebase
# or
yarn add firebase
```

Then, initialize Firebase in your application using the configuration object you obtained in Step 2. A common place for this is a separate `firebase.js` or `firebase.ts` file:

```javascript
// src/lib/firebase.js (example path)
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
```

#### For Android Applications:

Firebase is automatically initialized when your app starts, as long as `google-services.json` is correctly placed and dependencies are added. You'll primarily interact with `FirebaseAuth` and `GoogleSignInClient`.

### 5. Implement Google Sign-in in Your App

#### For Web Applications:

Here's an example of how you can use the `auth` and `googleProvider` to implement sign-in:

```javascript
// Example: In a React component or utility function
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase"; // Adjust path as needed

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // The signed-in user info.
    const user = result.user;
    console.log("Signed in user:", user);
    // You can also get the Google Access Token if needed
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    console.error("Error during Google sign-in:", errorMessage);
  }
};

// Call this function when a user clicks a "Sign in with Google" button
// <button onClick={signInWithGoogle}>Sign in with Google</button>
```

#### For Android Applications (Kotlin Example):

First, set up your Google Sign-In options in your `Activity` or `Fragment`:

```kotlin
// In your Activity or Fragment
import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInAccount
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.api.ApiException
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.GoogleAuthProvider

class SignInActivity : AppCompatActivity() {

    private lateinit var googleSignInClient: GoogleSignInClient
    private lateinit var firebaseAuth: FirebaseAuth
    private lateinit var signInLauncher: ActivityResultLauncher<Intent>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_in) // Your layout file

        // Configure Google Sign In
        val gso = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(getString(R.string.default_web_client_id)) // Get this from google-services.json
            .requestEmail()
            .build()

        googleSignInClient = GoogleSignIn.getClient(this, gso)
        firebaseAuth = FirebaseAuth.getInstance()

        signInLauncher = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
            val task = GoogleSignIn.getSignedInAccountFromIntent(result.data)
            try {
                // Google Sign In was successful, authenticate with Firebase
                val account = task.getResult(ApiException::class.java)!!
                firebaseAuthWithGoogle(account.idToken!!)
            } catch (e: ApiException) {
                // Google Sign In failed
                Log.w("SignInActivity", "Google sign in failed", e)
                // Update UI or show error message
            }
        }

        // Set up the sign-in button click listener
        findViewById<Button>(R.id.google_sign_in_button).setOnClickListener {
            signIn()
        }
    }

    private fun signIn() {
        val signInIntent = googleSignInClient.signInIntent
        signInLauncher.launch(signInIntent)
    }

    private fun firebaseAuthWithGoogle(idToken: String) {
        val credential = GoogleAuthProvider.getCredential(idToken, null)
        firebaseAuth.signInWithCredential(credential)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    // Sign in success, update UI with the signed-in user's information
                    val user = firebaseAuth.currentUser
                    Log.d("SignInActivity", "firebaseAuthWithGoogle:success with user: ${user?.displayName}")
                    // Navigate to main activity or update UI
                } else {
                    // If sign in fails, display a message to the user.
                    Log.w("SignInActivity", "firebaseAuthWithGoogle:failure", task.exception)
                    // Update UI or show error message
                }
            }
    }
}
```

For more detailed information, refer to the official Firebase documentation:

*   [Get started with Firebase Authentication](https://firebase.google.com/docs/auth/web/start)
*   [Authenticate using Google with JavaScript](https://firebase.google.com/docs/auth/web/google-signin)
*   [Add Firebase to your Android project](https://firebase.google.com/docs/android/setup)
*   [Authenticate using Google Sign-In with Android](https://firebase.google.com/docs/auth/android/google-signin)
