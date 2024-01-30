import { useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const [formFields, setFormFields] = useState({
    name: "nuclear.instruments",
    bio: "independent bedroom pop/sad boi",
    link: "https://www.instagram.com/nuclear.instruments",
    email: "user@example.com",
    password: "password123",
  });
  const profileInputs = [
    {
      name: "username",
      id: "name",
    },
    {
      name: "bio",
      id: "bio",
    },
    {
      name: "website/links",
      id: "link",
    },
    {
      name: "email",
      id: "email",
    },
  ];

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="page-wrapper">
      <MainHeader />
      <main className="profile-main">
        <div className="profile-main__left">
          <section className="profile">
            <h1 className="profile__title">profile</h1>
            <div className="profile__inputs">
              {profileInputs.map((type) => (
                <div className="profile__input-wrapper">
                  <label htmlFor={type.id} className="profile__label">
                    {type.name}
                  </label>
                  <input
                    type="text"
                    name={type.id}
                    id={type.id}
                    className="profile__input"
                    value={formFields[type.id]}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="profile__input-wrapper">
                <label htmlFor="password" className="profile__label">
                  change password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="profile__input"
                  onChange={handleChange}
                  value={formFields.password}
                />
              </div>
            </div>
          </section>
          <section>
            <h2 className="profile__title">settings</h2>
          </section>
        </div>
        <section className="feedback">
          <button className="feedback__btn">give us feedback</button>
          <button className="feedback__btn">log out</button>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
