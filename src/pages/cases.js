import fetch from "isomorphic-unfetch";
import Case from "../components/Case";
import Layout from "../components/Layout";

const Cases = ({ cases }) => {
  return (
    <Layout>
      <div>
        <h1>Cases Pages</h1>

        {/* List of Cases */}
        <div className="cases">
          {cases.map((item, key) => (
            <Case key={key} casesData={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const CASE_API = "http://localhost:5000";
export async function getStaticProps() {
  const response = await fetch(CASE_API);
  const cases = await response.json();
  return {
    props: {
      cases,
    },
  };
}

export default Cases;
