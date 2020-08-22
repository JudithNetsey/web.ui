function Case({ casesData }) {
  return (
    <div className="case">
      <h2>{casesData.country}</h2>
      <p>Total Cases: {casesData.case}</p>
      <p>Active Cases: {casesData.active}</p>
      <p>Recovered Cases: {casesData.recovered}</p>
      <p> Death Cases: {casesData.deaths}</p>

      {/*STYLING*/}
      <style jsx>
        {`
          .content {
            width: 100%;
            height: 100%;
            padding: 4rem;
          }

          .case {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            gap: 4rem;
          }
        `}
      </style>
    </div>
  );
}

export default Case;
