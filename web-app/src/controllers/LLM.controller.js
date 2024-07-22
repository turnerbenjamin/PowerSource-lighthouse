import LLMService from "../services/LLM.service.js";

export default class LLMController {

    static getLLMCount = async (req, res) => {
        try {
            const count = await LLMService.getLLMCount();
            res.status(200).json({ count });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    static createLLM = async (req, res) => {
        try {
            if (!req.body) return res.status(400).json({ error: "Invalid LLM details" });
            const llm = await LLMService.createLLM(req.body);
            res.status(201).json(llm);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    static getAllLLMs = async (req, res) => {
        try {
            const llms = await LLMService.getAllLLMs();
            res.status(200).json(llms);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    static getLLMById = async (req, res) => {
        try {
            if (!req.params || !req.params.id)
                return res.status(400).json({ error: "Invalid LLM ID" });
            const llm = await LLMService.getLLMById(req.params.id);
            if (!llm) return res.status(404).json({ error: "LLM not found" });
            res.status(200).json(llm);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
}
