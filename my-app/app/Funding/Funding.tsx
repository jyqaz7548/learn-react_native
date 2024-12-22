import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // 아이콘 사용을 위해 추가
import { launchImageLibrary } from 'react-native-image-picker'; // 이미지 선택을 위해 추가

const categoriesList = [
  { label: '패션', value: 'fashion' },
  { label: '뷰티', value: 'beauty' },
  { label: '홈 & 리빙', value: 'home_living' },
  { label: '스포츠 & 아웃도어', value: 'sports_outdoor' },
  { label: '푸드', value: 'food' },
  { label: '도서 & 전자책', value: 'books' },
  { label: '클래스', value: 'classes' },
  { label: '디자인', value: 'design' },
  { label: '반려동물', value: 'pets' },
  { label: '아트', value: 'art' },
  { label: '캐릭터 & 굿즈', value: 'merchandise' },
  { label: '영화 & 음악', value: 'film_music' },
  { label: '키즈', value: 'kids' },
  { label: '게임', value: 'games' },
];

const FundingScreen = () => {
  const [step, setStep] = useState(1);
  const [projectTitle, setProjectTitle] = useState('');
  const [mainImages, setMainImages] = useState<string[]>(['', '', '']);
  const [detailImages, setDetailImages] = useState<string[]>(['', '', '']);
  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [bank, setBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [category, setCategory] = useState(''); // 카테고리 상태 저장
  const [modalVisible, setModalVisible] = useState(false); // 모달 상태 추가

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      Alert.alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    console.log({
      projectTitle,
      mainImages,
      detailImages,
      itemName,
      amount,
      itemDescription,
      contactName,
      contactEmail,
      bank,
      accountNumber,
      category,
    });
  };

  const pickImage = (index: number, type: 'main' | 'detail') => {
    const options = {
      mediaType: 'photo' as const,
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('ImagePicker Error: ', response.errorMessage || 'Unknown error');
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          if (type === 'main') {
            const newImages = [...mainImages];
            newImages[index] = uri;
            setMainImages(newImages);
          } else {
            const newImages = [...detailImages];
            newImages[index] = uri;
            setDetailImages(newImages);
          }
        }
      } else {
        Alert.alert('이미지를 선택하지 않았습니다.');
      }
    });
  };

  const selectCategory = (value: string) => {
    const selectedCategory = categoriesList.find(category => category.value === value)?.label || ''; // 선택된 카테고리의 레이블
    setCategory(selectedCategory);
    setModalVisible(false); // 카테고리 선택 후 모달 닫기
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <TouchableOpacity style={styles.backButton} onPress={step > 1 ? handleBackStep : undefined}>
          {step > 1 && <Icon name="arrow-back" size={24} color="#007BFF" />}
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
      </View>

      {step === 1 && (
        <>
          <Text style={styles.label}>프로젝트 타이틀</Text>
          <TextInput
            style={styles.titleInput}
            placeholder="프로젝트 제목을 입력해주세요."
            placeholderTextColor="#7C7C7C"
            value={projectTitle}
            onChangeText={setProjectTitle}
          />

          <Text style={styles.label}>대표 이미지</Text>
          <View style={styles.imageRow}>
            {mainImages.map((image, index) => (
              <TouchableOpacity key={index} style={styles.imageContainer} onPress={() => pickImage(index, 'main')}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.imagePreview} />
                ) : (
                  <Icon name="camera-alt" size={40} color="#7C7C7C" />
                )}
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>상세 이미지</Text>
          <View style={styles.imageRow}>
            {detailImages.map((image, index) => (
              <TouchableOpacity key={index} style={styles.imageContainer} onPress={() => pickImage(index, 'detail')}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.imagePreview} />
                ) : (
                  <Icon name="camera-alt" size={40} color="#7C7C7C" />
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* 카테고리 선택창 추가 */}
          <Text style={styles.label}>카테고리 선택</Text>
          <TouchableOpacity style={styles.categoryButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.categoryButtonText}>{category || "카테고리를 선택해주세요."}</Text>
            <Icon name="arrow-drop-down" size={24} color="#000" />
          </TouchableOpacity>

          {/* 카테고리 선택 모달 */}
          <Modal
            transparent={true}
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <FlatList
                style={{ marginBottom: 30, marginTop: 20 }} // 리스트를 아래로 내리기
                data={categoriesList}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => selectCategory(item.value)}
                  >
                    <Text style={styles.modalItemText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </Modal>

          <TouchableOpacity style={styles.submitButton} onPress={handleNextStep}>
            <Text style={styles.submitButtonText}>다음 단계</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 2 && (
        <>
          <Text style={styles.label}>아이템 제목</Text>
          <TextInput
            style={styles.titleInput}
            placeholder="아이템 제목을 입력해주세요."
            value={itemName}
            onChangeText={setItemName}
          />

          <Text style={styles.label}>금액</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.amountInput}
              value={amount}
              onChangeText={(text) => {
                const newValue = text.replace(/[^0-9]/g, '');
                setAmount(newValue);
              }}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#000"
            />
          </View>

          <Text style={styles.label}>아이템 설명</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="아이템에 대한 이야기를 적어주세요."
            placeholderTextColor="#7C7C7C"
            value={itemDescription}
            onChangeText={setItemDescription}
            multiline
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleNextStep}>
            <Text style={styles.submitButtonText}>다음 단계</Text>
          </TouchableOpacity>
          </>
      )}

      {step === 3 && (
        <>
          <Text style={styles.label}>펀딩 등록자 성함</Text>
          <TextInput
            style={styles.input}
            placeholder="펀딩 프로젝트 등록자 성함을 입력해주세요."
            value={contactName}
            onChangeText={setContactName}
            placeholderTextColor="#7C7C7C"
          />

          <Text style={styles.label}>문의 이메일</Text>
          <TextInput
            style={styles.input}
            placeholder="문의사항을 접수받을 이메일을 입력해주세요."
            value={contactEmail}
            onChangeText={setContactEmail}
            placeholderTextColor="#7C7C7C"
          />

          <Text style={styles.label}>입금 통장 - 은행</Text>
          <TextInput
            style={styles.input}
            placeholder="은행을 입력해주세요."
            value={bank}
            onChangeText={setBank}
            placeholderTextColor="#7C7C7C"
          />

          <Text style={styles.label}>입금 통장 - 계좌번호</Text>
          <TextInput
            style={styles.input}
            placeholder="계좌번호를 입력해주세요."
            value={accountNumber}
            onChangeText={(text) => setAccountNumber(text.replace(/[^0-9]/g, ''))} // 숫자만 입력 가능
            placeholderTextColor="#7C7C7C"
          />

          <TouchableOpacity style={[styles.submitButton, { marginTop: 165 }]} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>프로젝트 제출하기</Text>
          </TouchableOpacity>

        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    paddingTop: 90,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  titleInput: {
    borderWidth: 0,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#EFEFEF',
    color: '#7C7C7C',
  },
  input: {
    borderWidth: 0,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#EFEFEF',
    color: '#7C7C7C',
  },
  descriptionInput: {
    height: 286,
    borderWidth: 0,
    backgroundColor: '#EFEFEF',
    color: '#7C7C7C',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '30%',
    backgroundColor: '#EFEFEF',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  submitButton: {
    backgroundColor: '#9BE600',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#000',
    fontSize: 16,
  },
  backButton: {
    marginRight: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  amountInput: {
    flex: 1,
    borderWidth: 0,
    borderRadius: 4,
    padding: 10,
    paddingRight: 30,
    backgroundColor: '#EFEFEF',
    color: '#000',
  },
  categoryButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#EFEFEF',
  },
  categoryButtonText: {
    color: '#7C7C7C',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginTop:70,
    justifyContent: 'flex-start', // 리스트를 위쪽에 정렬
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  modalItemText: {
    fontSize: 16,
  },
});

export default FundingScreen;

