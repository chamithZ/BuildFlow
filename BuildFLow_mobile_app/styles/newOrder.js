import { StyleSheet } from "react-native";
import Colors from "./Colors";

const newOrderStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    supplier: {
        borderStyle: "solid",
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 24,
        margin: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    supplierSelected: {
        borderStyle: "solid",
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 24,
        margin: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
    }
});

export default newOrderStyles;