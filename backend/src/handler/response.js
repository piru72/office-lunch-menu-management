const responseHandler = () => {
  return (req, res, next) => {
      res.ok = (responseSummary, response = {}) => {
          res.status(200).json({ responseSummary, response });
      };

      res.created = (responseSummary, response = {}) => {
          res.status(201).json({ responseSummary, response });
      };

      res.accepted = (responseSummary, response = {}) => {
          res.status(202).json({ responseSummary, response });
      };

      res.noContent = () => {
          res.status(204).end();
      };

      res.badRequest = (responseSummary, response = {}) => {
          res.status(400).json({ responseSummary, response });
      };

      res.unauthorized = (responseSummary, response = {}) => {
          res.status(401).json({ responseSummary, response });
      };

      res.forbidden = (responseSummary, response = {}) => {
          res.status(403).json({ responseSummary, response });
      };

      res.notFound = (responseSummary, response = {}) => {
          res.status(404).json({ responseSummary, response });
      };

      res.conflict = (responseSummary, response = {}) => {
          res.status(409).json({ responseSummary, response });
      };

      res.unprocessableEntity = (responseSummary, response = {}) => {
          res.status(422).json({ responseSummary, response });
      };

      res.tooManyRequests = (responseSummary, response = {}) => {
          res.status(429).json({ responseSummary, response });
      };

      res.internalError = (responseSummary, response = {}) => {
          res.status(500).json({ responseSummary, response });
      };

      res.notImplemented = (responseSummary, response = {}) => {
          res.status(501).json({ responseSummary, response });
      };

      res.serviceUnavailable = (responseSummary, response = {}) => {
          res.status(503).json({ responseSummary, response });
      };

      res.gatewayTimeout = (responseSummary, response = {}) => {
          res.status(504).json({ responseSummary, response });
      };

      res.custom = (status, responseSummary, response = {}) => {
          res.status(status).json({ responseSummary, response });
      };

      next();
  };
};

module.exports = responseHandler;
