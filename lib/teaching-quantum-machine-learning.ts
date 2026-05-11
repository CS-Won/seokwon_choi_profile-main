export type QmlScheduleRow = {
  week: string
  topic: string
  summary: string
}

export const QML_SCHEDULE: QmlScheduleRow[] = [
  {
    week: "0",
    topic: "Introduction",
    summary:
      "Why machine learning crashed into quantum information, what a QISCA-style seminar covers, and a roadmap from classical ML to quantum neural networks.",
  },
  {
    week: "1",
    topic: "Machine learning",
    summary:
      "Supervised / unsupervised / reinforcement / deep learning at a high level, why dataset size matters, and the gradient-descent loop that powers everything.",
  },
  {
    week: "2",
    topic: "Quantum machine learning",
    summary:
      "Variational quantum algorithms (VQA): the encode → ansatz → measure → classical-update loop, with the variational method from quantum mechanics as inspiration.",
  },
  {
    week: "3",
    topic: "Data encoding",
    summary:
      "How classical data enters a quantum circuit: basis, amplitude, and angle encodings — each with concrete formulas, qubit counts, and depth trade-offs.",
  },
  {
    week: "4",
    topic: "Neural networks",
    summary:
      "Classical neural networks from scratch: the perceptron, common activations, layered feed-forward computation, and how the network turns inputs into predictions one layer at a time.",
  },
  {
    week: "5",
    topic: "Quantum neural networks",
    summary:
      "Quantum perceptrons, the parameter-shift rule for training, data re-uploading and universal quantum classifiers, plus the noise/depth limits on NISQ devices.",
  },
]

export function getQmlWeekRow(week: string): QmlScheduleRow | undefined {
  return QML_SCHEDULE.find((r) => r.week === week)
}
