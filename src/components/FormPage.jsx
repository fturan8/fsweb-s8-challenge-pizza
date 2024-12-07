import {
    Form,
    FormGroup,
    Label,
    Input,
  } from 'reactstrap';

export default function FormPage() {

  const boyutlar = ["Küçük", "Orta", "Büyük"];
  const hamur = ["İnce", "Orta", "Kalın"];
  const ekMalzemeler = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    
  ];


  return (
    <Form>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input id="exampleSelect" name="select" type="select">
        {hamur.map((value) => {
          return <option>{value}</option>;
        })}
          
        </Input>
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input id="exampleText" name="text" type="textarea" />
      </FormGroup>
      
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Input name="radio1" type="radio" />{" "}
          <Label check>
            Option one is this and that—be sure to include why it‘s great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input name="radio1" type="radio" />{" "}
          <Label check>
            Option two can be something else and selecting it will deselect
            option one
          </Label>
        </FormGroup>
        
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" /> <Label check>Check me out</Label>
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" /> <Label check>Check me out</Label>
      </FormGroup>
      
    </Form>
  );
}
