const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center px-6 py-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Política de Privacidade
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Bem-vindo(a) ao <span className="font-semibold">Daily Wisdom</span>.
          Esta Política de Privacidade explica como coletamos, usamos e
          protegemos suas informações quando você utiliza nosso aplicativo.
        </p>
        <h2 className="text-2xl font-semibold mt-4">
          1. Informações que Coletamos
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          O Daily Wisdom é projetado para minimizar a coleta de informações.
          Podemos coletar dados limitados como identificadores de dispositivo
          para notificações.
        </p>
        <h2 className="text-2xl font-semibold mt-4">
          2. Como Usamos as Informações
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Utilizamos as informações para enviar notificações push e melhorar a
          funcionalidade do aplicativo.
        </p>
        <h2 className="text-2xl font-semibold mt-4">3. Contato</h2>
        <p className="text-lg leading-relaxed">
          Se você tiver dúvidas, entre em contato pelo e-mail:{" "}
          <a
            href="mailto:seuemail@exemplo.com"
            className="text-blue-500 underline">
            seuemail@exemplo.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
