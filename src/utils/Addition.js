const [number1, setNumber1] = useState(Math.floor(Math.random() * 100)); // Nombre aléatoire entre 0 et 100
const [number2, setNumber2] = useState(Math.floor(Math.random() * 100));
 
 const additionne = () => {
    setResult(number1 + number2)
  }
  useEffect(() => {
    setResult(() => {number1 + number2}) 
  }, {number1, number2})