import React from 'react'
import BurgerMenu from '../Navburger/BurgerMenu';
import './index.css';

export default function Privacy() {
  return (
    <div>
    <BurgerMenu/>
    <div className="privacy-main">   
    <header>
        <h1>Privacy Policy</h1>
      </header>
      <section>
        <h2>Last updated: 14/01/2024</h2>
        <p>
          Gulamabbas & Co ("us", "we", or "our") operates www.gulamabbasaccountants.co.uk (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.
        </p>
      </section>
      <section>
        <h2>Information Collection and Use</h2>
        <p>
          While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, and postal address.
        </p>
        <h2>Log Data</h2>
        <p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
        <h2>Cookies</h2>
        <p>Cookies are files with small amounts of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive. Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
      </section>
      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>This Privacy Policy is effective as of 14th January 2024 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.

We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.

If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.</p>
      </section>
      
      <footer>
        <p>If you have any questions about this Privacy Policy, please contact us at info@gulamabbasaccountants.co.uk.</p>
      </footer>
      </div>
    </div>
  )
}
