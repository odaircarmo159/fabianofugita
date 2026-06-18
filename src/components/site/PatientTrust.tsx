import { CountUp } from "@/components/site/CountUp";
import "./PatientTrust.css";

const trustMetrics = [
  {
    value: 5,
    prefix: "",
    suffix: " Mil",
    decimals: 0,
    label: "pacientes acompanhados",
  },
  {
    value: 10,
    prefix: "+",
    suffix: " anos",
    decimals: 0,
    label: "de medicina",
  },
];

export function PatientTrust() {
  return (
    <section className="patient-trust-section">
      <div className="patient-trust-shell">
        <div className="patient-trust-grid reveal">
          {trustMetrics.map((item) => (
            <article
              key={item.label}
              className="patient-trust-card"
            >
              <p className="patient-trust-value">
                <CountUp
                  end={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  decimals={item.decimals}
                />
              </p>
              <p className="patient-trust-label">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
