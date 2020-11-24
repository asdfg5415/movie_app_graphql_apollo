import ApolloCilent from "apollo-boost";

const client = new ApolloCilent({
  uri: "httops://movieql.now.sh",
});

export default client;