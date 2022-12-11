import React from 'react';
import Recipe from './Recipe';
import {RecipeItem} from "./RecipeItem";
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Outlet, useNavigate } from "react-router-dom"

const baseURL = "/recipes?name=User"

const RecipeList = () => {
    const [recipes, setRecipes] = useState<RecipeItem[]>([]);
    useEffect(() => {
        const getUser = async () => {
            axios.get(baseURL).then((response:AxiosResponse<RecipeItem[]>) => {
                console.log(response.data);
        
                setRecipes(response.data);
              });
        }
        getUser()
      }, [])
      const navigate = useNavigate()

    
      return (
      <>
        <button onClick={() => navigate("page2")}>画面遷移します！</button>

        <Table hover striped bordered>
            <thead>
                <tr>
                    <th>レシピ名</th>
                    <th>情報</th>
                    <th>作成日</th>
                    <th>設定</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipe) => 
                    <Recipe recipe={recipe} key={recipe.recipe_KEY} />
                )}
            </tbody>
        </Table>
        </>
        );
};

export default RecipeList;
