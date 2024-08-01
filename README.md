## CarePulse
CarePulse is a healthcare management dashboard for both patients and Doctors.
Patients can register, manage and book their appointments while administrative tools allowing admins to schedule, confirm, and cancel appointments with SMS notifications.

## Note
Since this is not in production, only verified numbers can be used to test the SMS service

## Tools
- Next.js
- Typescript
- TailwindCSS
- ShadCN
- Appwrite
- Twilio

## Features

- **Registering** - Users can sign up with a personal profile as a patient.
- **Booking** - Patients can conveniently schedule and manage multiple appointments with doctors.
- **Admin Management** - Administrators can view and update any scheduled, pending, and cancelled appointments.
- **SMS Notifications** - Pateints receive SMS notification to confirm scheduled/cancelled appointments.
- **UI/UX** - The application is designed to run on all device types and screen sizes.
- **File Upload** - Users can securely upload and store files within the app using Appwrite storage services.
- **Performance Monitoring** - Sentry monitors performance and detects errors users may encounter on the site.

## Usage
Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/AaronJai/healthcare
cd healthcare
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=111111
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).
Admin Passkey can be set to whatever pin you like.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.