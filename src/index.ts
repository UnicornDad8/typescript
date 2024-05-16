// object
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Ceci",
  retire: (date: Date) => {
    console.log(date);
  },
};

// typescript compiler prevent us from accesing the id property
// employee.id = 0;
