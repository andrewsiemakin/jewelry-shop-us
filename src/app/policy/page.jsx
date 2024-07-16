import s from "./PrivacyStatement.module.scss"

const PrivacyStatement = () => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.mainTitle}>Privacy Statement</h2>
            <p className={s.description}>Privacy Notice: This privacy notice discloses the privacy practices for
                (azulpawnshophuntingtonpark.com). <br/>
                This privacy notice applies solely to information collected by this website. It will notify you of the
                following:</p>
            <ul className={s.description}>
                <li>What personally identifiable information is collected from you through the website, how it is used
                    and with whom it may be shared.
                </li>
                <li>What choices are available to you regarding the use of your data.</li>
                <li>The security procedures in place to protect the misuse of your information.</li>
                <li>How you can correct any inaccuracies in the information.</li>
            </ul>

            <div>
                <h4 className={s.title}>Information Collection, Use, and Sharing</h4>
                <p className={s.description}>We are the sole owners of the information collected on this site. We only
                    have access to/collect
                    information that you voluntarily give us <br/>
                    via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
            </div>

            <p className={s.description}>We will use your information to respond to you, regarding the reason you
                contacted us. We will not share
                your information with any <br/>
                third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship
                an order.
            </p>

            <p className={s.description}>Unless you ask us not to, we may contact you via email in the future to tell
                you about specials, new
                products or services, or changes to <br/> this privacy policy. We provide a method to opt-out of any
                email contact.</p>

            <div>
                <h4 className={s.title}>Your Access to and Control Over Information</h4>
                <p className={s.description}>You may opt out of any future contacts from us at any time. You can do the
                    following at any time by
                    contacting us via the email <br/>
                    address or phone number given on our website:</p>
            </div>
            <div>
                <h4 className={s.title}>Your Access to and Control Over Information</h4>
                <ul>
                    <li>See what data we have about you, if any.</li>
                    <li>Change/correct any data we have about you.</li>
                    <li>Have us delete any data we have about you.</li>
                    <li>Express any concern you have about our use of your data.</li>
                </ul>
            </div>
            <div>
                <h4 className={s.title}>Security</h4>
                <p className={s.description}>We take precautions to protect your information. When you submit sensitive
                    information via the
                    website, your information is protected <br/>
                    both online and offline.</p>
            </div>
            <p className={s.description}>Wherever we collect sensitive information (such as credit card data), that
                information is encrypted and
                transmitted to us in a secure <br/>
                way. You can verify this by looking for a lock icon in the address
                bar and looking for “https” at the beginning of the address of the Web <br/>
                page.
            </p>
            <p className={s.description}>While we use encryption to protect sensitive information transmitted online, we
                also protect your
                information offline. Only employees <br/>
                who need the information to perform a specific job (for example,
                billing or customer service) are granted access to personally <br/>
                identifiable information. The computers/servers in which we store personally identifiable information
                are kept in a secure
                environment
            </p>
            <div>
                <h4 className={s.title}>Shop Registration</h4>
                <p className={s.description}>In order to use this website for transactional or ecommerce purposes, a
                    user must first complete the
                    registration form. During <br/>
                    registration a user is required to give certain information (such as name
                    and email address). This information is used to contact you <br/>
                    about the products/services on our site
                    in which you have expressed interest. At your option, you may also provide
                    demographic <br/>
                    information (such as gender or age) about yourself, but it is not required.</p>
            </div>
            <p className={s.description}>We request information from you on our order form. To buy from us, you must
                provide contact information
                (like name and shipping <br/>
                address) and financial information (like credit card number, expiration date).
                This information is used for billing purposes and to fill <br/>
                your orders. If we have trouble processing an
                order, we’ll use this information to contact you.
            </p>

            <h4 className={s.title}>Google Adwords and Analytics</h4>

            <p className={s.description}>We utilize Google Analytics and Adwords as part of our efforts to reach our
                customers. These tools help
                us understand who are <br/>
                customers are and how our site receives traffic from Google search results
                and Google Adwords. This information is only for the use of <br/>
                Diamond Exchange and your personal information is anonymous and is not provided to us from Google. You
                can always opt out from <br/>
                Google by not using Google search engines, or by not clicking on Adwords advertisements.
            </p>

            <p className={s.description}>You can learn more about how Google advertising tools here.</p>

            <div>
                <h4 className={s.title}>Cookies</h4>
                <p className={s.description}>We use “cookies” on this site. A cookie is a piece of data stored on a site
                    visitor’s hard drive to
                    help us improve your access to our site <br/>
                    and identify repeat visitors to our site. For
                    instance, when we use a cookie to identify you, you would not have to log in a password <br/>
                    more than once, thereby saving time while on our site. Cookies can also enable us to track and
                    target the interests of our users to <br/>
                    enhance the experience on our site. Usage of a cookie is in no way linked to any personally
                    identifiable information on our sit.
                </p>
            </div>
            <h4 className={s.title}>If you feel that we are not abiding by this privacy policy, you should contact us
                immediately.</h4>
        </div>
    );
};

export default PrivacyStatement;