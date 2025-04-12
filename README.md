# Aether AI Modal

Aether AI Modal is an open-source, self-hostable AI chatbot and code generation model designed to empower developers, creators, and organizations with full control, transparency, and performance. It’s your private, scalable, and secure alternative to commercial AI assistants — without any token limits or subscriptions.

## 🚀 Features

- 🧠 **LLM-Powered Intelligence**: Built on top of open Large Language Models like Mistral, Mixtral, and others.
- 🔐 **Security-First**: Integrates advanced cryptographic features for secure local deployment and communication.
- 🌐 **Self-Hosted Freedom**: Easily deploy your own chatbot via `./install.sh` on any compatible infrastructure.
- 🛠️ **Customizable**: Modular architecture to integrate new models, prompts, and workflows.
- 💬 **Chat & Code Modes**: Dual modes for natural language conversations and code generation.
- 💡 **Open & Free**: Fully open-source under the MIT License — no limits, no paywalls.

## 📦 Installation

To get started, clone the repo and run the install script:

```bash
git clone https://github.com/Sky-Genesis-Enterprise/aether-ai-model.git
cd aether-ai-modal
chmod +x install.sh
./install.sh
```

This will automatically set up the environment, download model weights, and start the service.

> ⚙️ Requirements:
> - Linux or macOS system
> - Python 3.10+
> - GPU with at least 8GB VRAM (for optimal performance)

## 🧩 Model Integration

Aether AI Modal supports plug-and-play integration with the following open models:

- [Mistral-7B](https://github.com/mistralai)
- [Mixtral-8x7B](https://github.com/mistralai)
- [Nous Hermes](https://huggingface.co/NousResearch)
- [OpenChat](https://github.com/imoneoi/openchat)
- More coming soon...

Use our `models/` directory to configure your preferred model and inference backend (ex: Ollama, vLLM, or custom runner).

## 🧠 Fine-Tuning

Want to customize the behavior of the assistant?

You can fine-tune it using your own dataset by running:

```bash
python scripts/fine_tune.py --dataset ./data/my_custom_data.json --base_model mistral-7b
```

Fine-tuned models will be saved in the `models/fine-tuned/` directory and auto-loaded at runtime.

## 🖥️ Local Web UI

A lightweight React + Vite-powered frontend is included.

Start the interface with:

```bash
npm install && npm run dev
```

Or build it for production:

```bash
npm run build
```

Visit `http://localhost:5173` to access the chat UI.

## 🔐 Security

Aether AI Modal is designed with security in mind:

- Local inference by default — no external API calls
- Optional HTTPS and authentication layers
- Built-in cryptographic message signing (via Python `cryptography` lib)

## 🤝 Contributing

We welcome contributors of all levels! Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file to get started.

- Report bugs in the [Issues](https://github.com/Sky-Genesis-Enterprise/aether-ai-model/issues)
- Submit PRs for features, bugfixes, or documentation improvements

## 📄 License

MIT License © 2025 [Sky Genesis Enterprise](https://skygenesis.io)

See [LICENSE](./LICENSE) for more.

---

### 🌐 Join the Aetherverse

We’re building a full ecosystem of secure, open, and privacy-focused tools:

- [Aether Search](https://github.com/Sky-Genesis-Enterprise/aether-search)
- [Aether Mail](https://github.com/Sky-Genesis-Enterprise/aether-mail)
- [Aether Drive](https://github.com/Sky-Genesis-Enterprise/aether-drive)
- [Aether Code](https://github.com/Sky-Genesis-Enterprise/aether-code)

Follow our journey, contribute, and help shape the future of open AI.

> _“AI belongs to everyone.” — The Sky Genesis Enterprise Team