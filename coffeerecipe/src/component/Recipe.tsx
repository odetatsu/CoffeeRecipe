import React from 'react';
import {RecipeItem} from "./RecipeItem";
import Button from 'react-bootstrap/Button';

const Recipe = ({ recipe}: { recipe: RecipeItem}) => {
    return (
        <tr key={recipe.recipe_KEY}>
        <td>{recipe.recipe_NAME}</td>
        <td>{recipe.disp_ORDER}</td>
        <td>{recipe.active_FLG}</td>
        <td>
            <Button variant="outline-secondary">編集</Button>
            <Button variant="outline-danger">削除</Button>
        </td>
    </tr>    );
};

export default Recipe;
