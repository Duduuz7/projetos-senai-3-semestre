import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';


import * as MediaLibrary from "expo-media-library"

import { FontAwesome } from "@expo/vector-icons"

import { Ionicons } from '@expo/vector-icons';


export default function Cam({ navigation }) {

    const cameraRef = useRef(null)

    const [openModal, setOpenModal] = useState(false)

    const [photo, setPhoto] = useState(null)

    const [tipoCamera, setTipoCamera] = useState(CameraType.back)

    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);

    const [fotoGaleria, setFotoGaleria] = useState(null)


    const [uriCameraCapture, setUriCameraCapture] = useState(null)

    const [showCameraModal, setShowCameraModal] = useState(false)



    useEffect(() => {

        (async () => {

            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();

        })();

    }, [])

    

    async function CapturePhoto() {
        if (cameraRef) {

            const photo = await cameraRef.current.takePictureAsync();

            setPhoto(photo.uri)

            setOpenModal(true)
          

        }
    }

    async function ClearPhoto() {

        setPhoto(null)

        setOpenModal(false)

    }

    async function UploadPhoto() {

      if (photo) {
        await MediaLibrary.createAssetAsync(photo).then(() => {
          console.log(photo);
           Alert.alert('Sucesso', ('foto salva na galeria'));
          
          navigation.navigate("ViewPrescription", { photoUri: photo.uri });
        }).catch(error => {
          // alert("erro ao processar" + error);
          console.log(error)
        });
      }
    }

    return (
        <View style={styles.container}>
            <Camera
                ref={cameraRef}
                style={styles.camera}
                type={tipoCamera}
                ratio='16:9'
                autoFocus={true}
                whiteBalance={'shadow'}
                flashMode={flashMode}
            >

                <View style={styles.containerClose} >
                    <FontAwesome name="close" size={23} color={"#fff"} />
                </View>

                <View style={styles.viewFlip}>

                    <TouchableOpacity
                        style={styles.btnFlip}
                        onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}
                    >

                        <Ionicons name="camera-reverse" size={32} color="white" />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCapture} onPress={() => CapturePhoto()}>
                        <FontAwesome name="camera" size={23} color={"#fff"} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnFlash}
                        onPress={() => setFlashMode(flashMode === Camera.Constants.FlashMode.off
                            ? Camera.Constants.FlashMode.on
                            : Camera.Constants.FlashMode.off)}
                    >

                        <FontAwesome name="flash" size={23} color={"#fff"} />
                    </TouchableOpacity>



                    <Modal animationType='slide' transparent={false} visible={openModal}>

                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", margin: 20 }}>

                            <View stye={{ margin: 10, flexDirection: "row" }}>
                                {/* Botoes de controle */}
                            </View>

                            <Image
                                style={{ width: "100%", height: 500, borderRadius: 15 }}
                                source={{ uri: photo }}
                            />

                            <View style={{ margin: 10, flexDirection: 'row' }}>

                                {/* Botoes de controle */}
                                <TouchableOpacity style={styles.btnClear} onPress={() => ClearPhoto()}>
                                    <FontAwesome name="trash" size={25} color={"#ff0000"} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btnUpload} onPress={() => UploadPhoto()}>
                                    <FontAwesome name="save" size={25} color={"#121212"} />
                                </TouchableOpacity>

                            </View>

                        </View>
                    </Modal>


                </View>

            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        width: "100%",
        height: "80%",
        flex: 1,
    },
    viewFlip: {
        flex: 1,
        backgroundColor: "trasparent",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    btnFlip: {
        padding: 20,
        marginBottom: 15
    },
    txtFlip: {
        fontSize: 20,
        color: "#fff",
        marginBottom: 20
    },
    btnCapture: {
        padding: 20,
        margin: 20,
        borderRadius: 20,
        // backgroundColor: "#121212",

        alignItems: "center",
        justifyContent: "center",
    },

    btnFlash: {
        padding: 20,
        marginBottom: 19,
        borderRadius: 20,
        // backgroundColor: "#121212",

        alignItems: "center",
        justifyContent: "center",
    },

    btnClear: {
        backgroundColor: 'transparent',
        padding: 20,

        alignItems: "center",
        justifyContent: "center",
    },

    btnUpload: {
        backgroundColor: 'transparent',
        padding: 20,

        alignItems: "center",
        justifyContent: "center",
    }

});
