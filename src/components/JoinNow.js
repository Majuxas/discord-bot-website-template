import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite our bot to your Discord server!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.com/api/oauth2/authorize?client_id=1333201865990602935&scope=bot+applications.commands&permissions=1374891928950">
            Invite now!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
