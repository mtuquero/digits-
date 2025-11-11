<section id="walkthrough">
  <h2>Walkthrough</h2>

  <h3>Landing Page</h3>
  <img src=".png" width="800" alt="Landing Page">
  <p>
    The landing page introduces the Digits application and provides navigation options for signing in or registering a new account.
    If the user is not logged in, this is the only accessible page.
  </p>

  <h3>Sign In Page</h3>
  <img src="doc/signin.png" width="800" alt="Sign In Page">
  <p>
    Existing users can log in by entering their email and password. Successful login redirects to the Home (Contacts) page.
  </p>

  <h3>Sign Up Page</h3>
  <img src="doc/signup.png" width="800" alt="Sign Up Page">
  <p>
    New users can register by creating an account with their name, email, and password.
    Once registration is complete, users can immediately sign in and begin adding contacts.
  </p>

  <h3>Home Page (Contacts)</h3>
  <img src="doc/home.png" width="800" alt="Home Page">
  <p>
    After logging in, users are directed to their personal contacts list.
    Each contact card displays a person’s name, phone number, email address, and home address.
  </p>
  <ul>
    <li>View all saved contacts</li>
    <li>Edit or delete existing contacts</li>
    <li>Navigate to add new contacts</li>
  </ul>

  <h3>Add Contact Page</h3>
  <img src="doc/add-contact.png" width="800" alt="Add Contact Page">
  <p>
    The Add Contact page allows users to add a new contact to their list. Users can input:
  </p>
  <ul>
    <li>Name</li>
    <li>Address</li>
    <li>Phone number</li>
    <li>Email address</li>
  </ul>
  <p>
    Once submitted, the contact is saved and displayed on the Home page.
  </p>

  <h3>Edit Contact Page</h3>
  <img src="doc/edit-contact.png" width="800" alt="Edit Contact Page">
  <p>
    The Edit Contact page allows users to update any information for an existing contact.
    After saving changes, the updated contact details will appear on the Home page.
  </p>

  <h3>Admin Page</h3>
  <img src="doc/admin.png" width="800" alt="Admin Page">
  <p>
    The Admin Page is accessible only to admin users.
    This page displays all contacts created by all users in the system.
    Admins can review or manage all stored data to ensure the system remains organized and secure.
  </p>

  <h3>Not Authorized Page (Optional)</h3>
  <img src="doc/not-authorized.png" width="800" alt="Not Authorized Page">
  <p>
    If a user attempts to access a page they don’t have permission for (like the Admin page),
    they are redirected to the Not Authorized page, which displays an appropriate message.
  </p>

  <h2>Summary</h2>
  <p>
    Digits provides a straightforward and secure way to manage personal contact information.
    It demonstrates user authentication, protected routes, and CRUD (Create, Read, Update, Delete)
    functionality using a modern front-end framework.
  </p>
  <p>
    The project’s clean interface and simple navigation make it an ideal example of a contact management web application.
  </p>
</section>
