const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center px-6 py-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Política de Privacidade
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Última atualização:</strong> 25 de novembro de 2024
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Bem-vindo(a) ao <span className="font-semibold">Daily Wisdom</span>.
          Esta Política de Privacidade explica como coletamos, usamos e
          protegemos suas informações quando você utiliza nosso aplicativo. Seu
          direito à privacidade é importante para nós, e estamos comprometidos
          em garantir a proteção de seus dados.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Informações que Coletamos
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          O <span className="font-semibold">Daily Wisdom</span> é projetado para
          minimizar a coleta de informações. No entanto, podemos coletar algumas
          informações limitadas para fornecer notificações e melhorar a
          experiência do usuário.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">
          1.1. Informações Fornecidas por Você
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          Nenhuma informação pessoal identificável é coletada diretamente por
          nosso aplicativo.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">
          1.2. Informações Coletadas Automaticamente
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          - <strong>Dados de uso:</strong> Podemos coletar informações como o
          tipo de dispositivo, versão do sistema operacional e interações
          básicas com o aplicativo (ex.: frequência de uso).
        </p>
        <p className="text-lg leading-relaxed mb-4">
          - <strong>Notificações Push:</strong> Utilizamos notificações push
          para enviar mensagens motivacionais diárias. Para isso, o aplicativo
          registra o identificador do dispositivo (token de notificação).
          Nenhuma outra informação pessoal é vinculada a este token.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Como Usamos as Informações
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Utilizamos as informações coletadas apenas para os seguintes fins:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            Enviar frases motivacionais por meio de notificações push.
          </li>
          <li className="mb-2">
            Melhorar a funcionalidade e desempenho do aplicativo.
          </li>
          <li>
            Garantir a conformidade com requisitos legais ou regulamentares.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Compartilhamento de Informações
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Não compartilhamos suas informações pessoais com terceiros, exceto:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            Quando exigido por lei, regulamentação ou decisão judicial.
          </li>
          <li>
            Para proteger nossos direitos legais ou cumprir nossas obrigações
            contratuais.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Segurança dos Dados
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Estamos comprometidos em proteger suas informações. Implementamos
          medidas técnicas e organizacionais para prevenir acessos não
          autorizados, uso indevido ou divulgação dos dados coletados.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Seus Direitos</h2>
        <p className="text-lg leading-relaxed mb-4">Você tem o direito de:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            Desativar as notificações push a qualquer momento por meio das
            configurações do seu dispositivo.
          </li>
          <li>
            Solicitar esclarecimentos sobre o uso das suas informações, entrando
            em contato conosco.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          6. Retenção de Dados
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Mantemos apenas as informações estritamente necessárias para operar o
          aplicativo. Tokens de notificação são armazenados enquanto você
          utiliza o aplicativo e são removidos automaticamente quando você
          desinstala o aplicativo.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          7. Serviços de Terceiros
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          O aplicativo não utiliza serviços de terceiros para coleta de dados ou
          análise.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          8. Privacidade Infantil
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          O <span className="font-semibold">Daily Wisdom</span> não coleta
          intencionalmente informações de crianças menores de 13 anos. Se
          soubermos que coletamos informações de uma criança, tomaremos medidas
          imediatas para excluí-las.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          9. Alterações a Esta Política
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Podemos atualizar esta Política de Privacidade ocasionalmente.
          Notificaremos os usuários sobre alterações significativas por meio de
          uma atualização no aplicativo ou outro meio apropriado.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">10. Contato</h2>
        <p className="text-lg leading-relaxed mb-4">
          Se você tiver dúvidas ou preocupações sobre esta Política de
          Privacidade, entre em contato conosco pelo e-mail:{" "}
          <a
            href="mailto:mobilewaytocode@gmail.com"
            className="text-blue-500 underline">
            mobilewaytocode@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
