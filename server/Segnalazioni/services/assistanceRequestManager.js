const AssistanceRequestDAO = require("../dao/assistanceRequestDAO");

class AssistanceRequestManager {
  constructor() {
    if (AssistanceRequestManager.instance) {
      return AssistanceRequestManager.instance;
    }
    AssistanceRequestManager.instance = this;
  }

  async createTicket(userUsername, description, message) {
    if (!userUsername || !description || !message) {
      throw new Error("Username e descrizione sono obbligatori.");
    }
    return await AssistanceRequestDAO.createTicket(userUsername, description, message);
  }

  async getTicket(ticketId) {
    return await AssistanceRequestDAO.getTicketById(ticketId);
  }

  async listUserTickets(userUsername) {
    return await AssistanceRequestDAO.getUserTickets(userUsername);
  }

  async listAllTickets() {
    return await AssistanceRequestDAO.getAllTickets();
  }

  async closeTicket(ticketId) {
    return await AssistanceRequestDAO.closeTicket(ticketId);
  }

  async addMessage(ticketId, username, message, role) {
    return await AssistanceRequestDAO.addMessage(ticketId, username, message, role);
  }
}

module.exports = new AssistanceRequestManager();
