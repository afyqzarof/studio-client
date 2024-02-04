import { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import "./ProfilePage.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useIsDemo from "../../hooks/useIsDemo";
import DemoBtn from "../../components/DemoBtn/DemoBtn";

const ProfilePage = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [isSave, setIsSave] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    bio: "",
    link: "",
    email: "",
    password: "password goes here",
  });
  const isDemo = useIsDemo();

  useEffect(() => {
    if (isDemo) {
      setFormFields({
        name: "your username here",
        bio: "",
        link: "",
        email: "demo@email.com",
        password: "password goes here",
      });
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchUserDetails = async () => {
      try {
        const { data } = await axios.get(baseUrl + "/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormFields({
          ...formFields,
          name: data.username,
          bio: data.bio ?? "",
          link: data.link ?? "",
          email: data.email,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserDetails();
  }, []);

  const handleUpdateProfile = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const updatedDetails = {
      username: formFields.name,
      bio: formFields.bio,
      link: formFields.link,
      email: formFields.email,
    };
    await axios.patch(baseUrl + "/users", updatedDetails, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setIsSave(false);
  };
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
    setIsSave(true);
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="page-wrapper">
      <MainHeader />
      <main className="profile-main">
        <div className="profile-main__left">
          <form className="profile" onSubmit={handleUpdateProfile}>
            <h1 className="profile__title">profile</h1>
            <div className="profile__inputs">
              {profileInputs.map((type) => (
                <div className="profile__input-wrapper" key={type.id}>
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
              {isDemo ? (
                <DemoBtn
                  className={
                    isSave
                      ? "profile__btn"
                      : "profile__btn profile__btn--hidden"
                  }
                  name="save"
                  isUpload={true}
                />
              ) : (
                <button
                  className={
                    isSave
                      ? "profile__btn"
                      : "profile__btn profile__btn--hidden"
                  }>
                  save
                </button>
              )}
            </div>
          </form>
          <section>
            <h2 className="profile__title">settings</h2>
          </section>
        </div>
        <section className="feedback">
          <button className="feedback__btn">give us feedback</button>
          <button className="feedback__btn" onClick={handleLogout}>
            log out
          </button>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
