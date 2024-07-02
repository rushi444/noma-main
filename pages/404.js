export const getStaticProps = () => {
  return {
    redirect: {
      destination: "/",
    },
  };
};

export default function Custom404() {
  return null;
}
