const cohort = {
    name: 'Lions',
    id: 20,
    student_names: ['Michael' , 'James', 'Alex', 'Jones'],
  };

const nos = () => {
   return `${cohort.id} - ${cohort.name} - ${cohort.student_names.length} students in this cohort`
}


  console.log(nos());
 