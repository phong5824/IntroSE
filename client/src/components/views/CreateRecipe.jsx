import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../modules/Navbar";
import Footer from "../modules/Footer";
import { UserContext } from "../../context/userContext";
import { handleCreateRecipe } from "../../action/recipesAction";

const Ingredient = ({
  index,
  ingredient,
  isAddingIngredient,
  handleChangeIngredient,
  handleRemove,
}) => {
  return (
    <div className="flex flex-row items-center space-x-4 bg-white p-2 rounded-lg shadow">
      <input
        className="text-xl flex-grow border-2 border-gray-300 p-2 rounded"
        type="text"
        id={index}
        onChange={handleChangeIngredient}
        placeholder="100g flour"
        value={ingredient}
      />
      {!isAddingIngredient ? (
        <button
          className="text-xl bg-red-500 text-white py-2 px-4 rounded"
          onClick={() => {
            handleRemove(index);
          }}
        >
          Remove
        </button>
      ) : null}
    </div>
  );
};

const IngredientsList = ({
  ingredients,
  setIngredients,
  ingredientsList,
  setIngredientsList,
}) => {
  const [isAddingIngredient, setIsAddingIngredient] = useState(false);
  const handleAddIngredient = () => {
    setIsAddingIngredient(true);

    setIngredientsList([...ingredientsList, ""]);
    console.log(ingredientsList);
    console.log("Add ingredient");
  };

  const handleChangeIngredient = (event) => {
    const index = event.target.id;
    console.log("id: ", index);
    const newIngredientsList = [...ingredientsList];
    newIngredientsList[index] = event.target.value;
    setIngredientsList(newIngredientsList);
    console.log(ingredientsList);
    console.log("Change ingredient");
  };

  const handleRemove = (index) => {
    const newIngredientsList = [...ingredientsList];
    newIngredientsList.splice(index, 1);
    setIngredientsList(newIngredientsList);
    console.log(ingredientsList);
    console.log("Remove");
  };

  const handleAdd = () => {
    setIsAddingIngredient(false);

    console.log(ingredientsList);
    console.log("Add");
  };

  const handleCancel = () => {
    setIsAddingIngredient(false);
    setIngredientsList(ingredientsList.slice(0, -1));
    console.log("Cancel");
  };
  return (
    <div className="general-info-form-prep-cook-title text-xl border-2 border-gray-300 p-2 rounded flex-1 bg-orange-300 h-[70px]">
      <h1 className="text-3xl font-bold mb-4">Ingredient</h1>
      <div className="flex flex-col space-y-2">
        {ingredientsList.map((ingredient, index) => (
          <Ingredient
            key={index}
            index={index}
            ingredient={ingredient}
            isAddingIngredient={isAddingIngredient}
            handleChangeIngredient={handleChangeIngredient}
            handleRemove={handleRemove}
          />
        ))}
        {!isAddingIngredient ? (
          <div className="flex flex-col mt-4">
            <button
              onClick={handleAddIngredient}
              className="text-2xl font-bold bg-green-500 text-white py-2 px-4 rounded"
            >
              Add ingredient
            </button>
          </div>
        ) : (
          <div className="flex flex-col mt-4 space-y-2">
            <button
              onClick={handleAdd}
              className="text-2xl font-bold bg-green-500 text-white py-2 px-4 rounded"
            >
              Add
            </button>
            <button
              onClick={handleCancel}
              className="text-2xl font-bold bg-red-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const GeneralInfo = ({
  recipeName,
  setRecipeName,
  prepTime,
  setPrepTime,
  cookTime,
  setCookTime,
  ingredients,
  setIngredients,
  ingredientsList,
  setIngredientsList,
}) => {
  return (
    <div className="general-info-wrapper flex flex-col items-center space-y-4 bg-blue-300 p-4 rounded-lg shadow-lg w-1/2 h-screen/3 mx-auto">
      <div className="general-info-title w-full text-center">
        <h1 className="text-3xl font-bold mb-4">General Information</h1>
      </div>
      <div className="general-info-form flex flex-col space-y-4 w-full">
        <div className="general-info-form-child general-info-form-recipe-name items-center flex flex-row justify-between bg-orange-300 p-4 rounded-lg shadow h-[70px]">
          <h1 className="general-info-form-recipe-name-title text-xl font-bold flex-1 items-center">
            Recipe Name
          </h1>
          <input
            className="general-info-form-recipe-name-input text-xl border-2 items-center border-gray-300 p-2 rounded flex-1 h-[60px]"
            type="text"
            placeholder="Recipe Name"
            onChange={(e) => {
              setRecipeName(e.target.value);
            }}
          />
        </div>

        <div className="general-info-form-child general-info-form-prep-time flex flex-row justify-between bg-orange-300 p-4 rounded-lg shadow h-[70px] items-center">
          <h1 className="general-info-form-prep-time-title text-xl font-bold flex-1 items-center">
            Prep-time
          </h1>
          <input
            className="general-info-form-prep-time-input text-xl border-2 items-center border-gray-300 p-2 rounded flex-1 h-[60px]"
            type="text"
            onChange={(e) => {
              setPrepTime(e.target.value);
            }}
          />
        </div>

        <div className="general-info-form-child general-info-form-cook-time flex flex-row justify-between items-center bg-orange-300 p-4 rounded-lg shadow h-[70px]">
          <h1 className="general-info-form-cook-time-title text-2xl font-bold flex-1">
            Cook-time
          </h1>
          <input
            className="general-info-form-prep-cook-title text-xl border-2 items-center border-gray-300 p-2 rounded flex-1 "
            type="text"
            onChange={(e) => {
              setCookTime(e.target.value);
            }}
          />
        </div>

        <IngredientsList
          ingredients={ingredients}
          setIngredients={setIngredients}
          ingredientsList={ingredientsList}
          setIngredientsList={setIngredientsList}
          className="flex-1 h-[60px]"
        />
      </div>
    </div>
  );
};

const Step = ({
  index,
  step,
  isAddingStep,
  handleChangeStep,
  handleRemove,
}) => {
  return (
    <div className="flex flex-row items-center space-x-4 bg-white p-4 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold">Step {index + 1}</h1>
      <input
        className="text-xl border-2 border-gray-300 p-2 rounded"
        type="text"
        id={index}
        onChange={handleChangeStep}
        placeholder="Pour water into a bowl"
        value={step}
      />
      {!isAddingStep ? (
        <button
          className="text-xl bg-red-500 text-white p-2 rounded hover:bg-red-700"
          onClick={() => {
            handleRemove(index);
          }}
        >
          Remove
        </button>
      ) : null}
    </div>  
  );
};

const InstructionInfo = ({ steps, setSteps }) => {
 
  const [isAddingStep, setIsAddingStep] = useState(false);

  const handleAddStep = () => {
    setIsAddingStep(true);
    setSteps([...steps, ""]);
    console.log(steps);
    console.log("Add step");
  };

  const handleChangeStep = (event) => {
    const index = event.target.id;
    console.log("id: ", index);
    const newSteps = [...steps];
    newSteps[index] = event.target.value;
    setSteps(newSteps);
    console.log(steps);
    console.log("Change step");
  };

  const handleRemove = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
    console.log(steps);
    console.log("Remove");
  };

  const handleAdd = () => {
    setIsAddingStep(false);
    console.log(steps);
    console.log("Add");
  };

  const handleCancel = () => {
    setIsAddingStep(false);
    setSteps(steps.slice(0, -1));
    console.log("Cancel");
  };

  return (
    <div className="instruction-info-wrapper flex flex-col items-center space-y-4 bg-blue-300 p-4 rounded-lg shadow-lg w-1/2 mx-auto">
    <div className="instruction-info-title w-full text-center flex">
      <h1 className="text-3xl font-bold">Instruction Information</h1>
    </div>
    <div className="instruction-info-form flex flex-col">
      <div className="instruction-info-form-child instruction-info-form-steps flex flex-col bg-orange-300 p-2 m-2">
        <h1 className="instruction-info-form-steps-title text-xl">Steps</h1>
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <Step
              key={index}
              index={index}
              step={step}
              isAddingStep={isAddingStep}
              handleChangeStep={handleChangeStep}
              handleRemove={handleRemove}
            />
          ))}
          {!isAddingStep ? (
            <div className="flex flex-col">
              <button onClick={handleAddStep} className="text-2xl font-bold">
                Add step
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <button onClick={handleAdd} className="text-2xl font-bold">
                Add
              </button>
              <button onClick={handleCancel} className="text-2xl font-bold">
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

const SubmitForm = ({ onSubmit }) => {
  return (
    <div className="flex flex-row justify-around">
      <button onClick={onSubmit} className="text-2xl font-bold">
        Submit
      </button>
    </div>
  );
};

const CreateRecipeForm = () => {
  const [recipeName, setRecipeName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  // const [ingredients, setIngredients] = useState([]); // [1, 2, ...]
  const [ingredientsList, setIngredientsList] = useState([]); // ["100g flour", "100ml water" ...
  const [steps, setSteps] = useState([]);
  const [nutritions, setNutritions] = useState([]); // ["Fat 10g  20%", "Protein 20g  40%", ...

  const onSubmit = async () => {
    const recipe = {
      recipe_name: recipeName,
      prep_time: prepTime,
      cook_time: cookTime,
      ingredients_list: ingredientsList,
      steps: steps,
      nutritions: [],
    };
    console.log(recipe);
    if (recipeName === "" || prepTime === "" || cookTime === "") {
      console.log("Please fill in all fields");
      return;
    }
    if (await handleCreateRecipe(recipe)) {
      console.log("Create recipe successfully");
    }

    console.log("Submit");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <GeneralInfo
        recipeName={recipeName}
        setRecipeName={setRecipeName}
        prepTime={prepTime}
        setPrepTime={setPrepTime}
        cookTime={cookTime}
        setCookTime={setCookTime}
       
        ingredientsList={ingredientsList}
        setIngredientsList={setIngredientsList}
      />
      <InstructionInfo steps={steps} setSteps={setSteps} />
      <SubmitForm onSubmit={onSubmit} />
    </div>
  );
};

export default function CreateRecipe() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  if (!user) {
    navigate("/home");
  }
  return (
    <div className="home-wrapper h-screen overflow-y-auto bg-slate-200">
      <NavBar />
      <CreateRecipeForm />
      <Footer />
    </div>
  );
}
