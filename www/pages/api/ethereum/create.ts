import * as Env from "@data/environment";
import * as Ethereum from "@data/node-ethereum";
import * as Server from "@common/server";
import * as Strings from "@common/strings";

export default async function createEthereumAddress(req, res) {
  await Server.cors(req, res);

  if (Strings.isEmpty(req.body.address)) {
    return res
      .status(500)
      .send({ error: "An Ethereum address must be provided." });
  }

  const response = await Ethereum.createAddress({ address: req.body.address });

  res.json({ address: response });
}
