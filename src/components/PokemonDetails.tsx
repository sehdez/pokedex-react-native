import React from 'react'
import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { PokemonSpecies } from '../interfaces/SpeciesInterface';
import { Evolutions } from '../interfaces/evolutionsInterface';
import { getId } from '../helpers/getIdPokemon';
import PokemonEvolutions from './PokemonEvolutions';
import { capitalName } from '../helpers/capitalName';

interface Props{
    pokemon: PokemonFull;
    species: PokemonSpecies;
    evolutions: Evolutions;
    isLoading: boolean;
}

const PokemonDetails = ( { pokemon, species, evolutions, isLoading }: Props ) => {
    return (
        <ScrollView style={{
            ...StyleSheet.absoluteFillObject,
            
        }}
        >
            <View style={{ height:240 }} ></View>
            <View style={{
                marginHorizontal: 10
            }}>
                <Text style={ styles.titulo }> Tipos: </Text> 
                <View style={{ flexDirection: 'row' }}>
                    { pokemon.types.map(({type}, index )=> (
                        <Text
                            key={type.name+index}    
                            style={ styles.regularText } 
                            >{ capitalName(type.name) }
                        </Text>
                    )) } 
                </View>
            <Text style={ styles.titulo }> Peso: </Text> 
            <Text style={ styles.regularText } 
                >{ pokemon.weight/10 } Kg.
            </Text>

            <Text style={ styles.titulo }> Estatura: </Text> 
            <Text style={ styles.regularText } 
                >{ pokemon.height*10 } Cm. 
            </Text>

            <Text style={ styles.titulo }> Habilidades: </Text> 
            <View style={{ flexDirection: 'row' }}>
                { pokemon.abilities.map(({ability}, index )=> (
                    <Text
                        key={ability.name + index}    
                        style={ styles.regularText } 
                        >{ capitalName(ability.name) }
                    </Text>
                )) } 
            </View>

            <Text style={ styles.titulo }> Estadisticas: </Text> 
            <View style={{ flexDirection: 'column' }}>
                { pokemon.stats.map(( e, index )=> (
                    <View key={e.stat.name + index} style={{ flexDirection:'row' }}>
                        <Text style={{ ...styles.regularText, width: 150 }}>{ capitalName(e.stat.name) } </Text>
                        <Text style={{ ...styles.regularText, fontWeight:'bold' }}>{ e.base_stat } </Text>
                    </View>
                )) } 
            </View>
            </View>


            <View>
                <Text style={ styles.titulo }> Evoluciones: </Text> 
                <View style={{ flexDirection: 'row', marginBottom:100 }}>
                    
                        {
                            isLoading 
                            ? ( 
                                <View style={ styles.loading } >
                                    <ActivityIndicator color={'white'} size={50} /> 
                                </View>    
                                )
                            : ( <PokemonEvolutions evolutions={ evolutions } /> )
                        }
                
                </View>
                <View>
                
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titulo:{
        marginTop:20,
        color: 'white',
        fontSize:25,
        fontWeight: 'bold',
    },
    regularText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10
    },
    loading:{
        flex:1,
        height: 200,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default PokemonDetails