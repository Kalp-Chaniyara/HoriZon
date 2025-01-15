import { SignIn } from "@clerk/clerk-react"

function SignInPage() {
     return (
          <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
          <div className="w-full max-w-md">
               <SignIn
                    appearance={{
                         elements: {
                              rootBox: "mx-auto w-full",
                              card: "bg-white shadow-xl rounded-xl",
                              headerTitle: "text-blue-600",
                              headerSubtitle: "text-gray-600",
                              socialButtonsBlockButton: "border-gray-200 hover:bg-gray-50",
                              formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
                              footerActionLink: "text-blue-600 hover:text-blue-700",
                              dividerLine: "bg-gray-200",
                              dividerText: "text-gray-500",
                              formFieldInput: "border-gray-200 focus:border-blue-600 focus:ring-blue-600",
                              identityPreviewText: "text-gray-600",
                              identityPreviewEditButton: "text-blue-600 hover:text-blue-700",
                         },
                         layout: {
                              socialButtonsPlacement: "top",
                              privacyPageUrl: "/privacy",
                              termsPageUrl: "/terms",
                         },
                    }}
               />
          </div>
     </div>
     )
}

export default SignInPage