export default function Stats({ items }) {

  if (!items.length)
    return (
      <p className="stats">
        <em>
          Start Adding some items to your packing List 🏝
        </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 10) * 10;
  console.log(numPacked, " Y este es el NumItem :", numItems, " Y este el % :", percentage);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? 'You got everything! Ready for your trip ✈!' :
          `💼 You have ${numItems} items on your list, 
      and you already packed ${numPacked}  (${percentage}%)`}
      </em>
      <em>
        <p className="credits">
        Developed by: Javier Arellano  jarare@gmail.com
        </p>
      </em>
    </footer>
  );
}
