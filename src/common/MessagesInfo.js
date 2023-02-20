import Alert from 'react-bootstrap/Alert';

function MessagesInfo() {
  return (
    <>
      {[
        'warning'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Please Fill The From & To Fields
        </Alert>
      ))}
    </>
  );
}

export default MessagesInfo;