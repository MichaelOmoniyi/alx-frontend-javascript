export default function (mathFunction) {
  const queue = [];
  let resolvedValue;

  try {
    queue.push(mathFunction());
  } catch(err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
