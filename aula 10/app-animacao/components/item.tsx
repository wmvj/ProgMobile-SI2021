import { Pressable, StyleSheet, Text, View } from "react-native";
import { Task } from "../types/task";
import Animated, { FadeOutRight, SlideInLeft, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

type Props = {
    task: Task;
    onDelete: (taskName: string) => void;
    onDoneUpdate: (taskName: string) => void;
}
export const Item = ({ task, onDelete, onDoneUpdate }: Props) => {

    const elementScale = useSharedValue(1);
    const elementOpacity = useSharedValue(1);

    const animationStyles = useAnimatedStyle(() =>({
        transform:[{scale:elementScale.value}],
        opacity:elementOpacity.value
    }))

    const handleDelete = () => {
        onDelete(task.label);
    }

    const handleDone = () => {
        if(task.done === false){
            elementScale.value = withRepeat(
                withTiming(1.1, {duration: 200}),
                2, true
            )
            elementOpacity.value = withTiming(0.65)
        } else {
            elementOpacity.value = withTiming(1)
        }
        onDoneUpdate(task.label);
    }

    return (
        <Animated.View 
            style={[styles.area, animationStyles]}
            entering={SlideInLeft}
            exiting={FadeOutRight}
        >
            <Pressable onPress={handleDone}>
                <View style={[styles.check, task.done ? styles.checked : styles.unchecked]}></View>
            </Pressable>
            <Text style={styles.text}>{task.label}</Text>
            <Pressable onPress={handleDelete}>
                <Text>Excluir</Text>
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    area: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCC',
        padding: 20,
        margin: 10,
        borderRadius: 10
    },
    text: {
        flex: 1,
        fontSize: 18,
        marginHorizontal: 10
    },
    check: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#FFF'
    },
    checked: {
        backgroundColor: '#000'
    },
    unchecked: {
        backgroundColor: '#FFF'
    }
});