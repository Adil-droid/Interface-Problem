import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const projects = [
  {
    id: 1,
   title: "Fresh & Clean UI Design",
    location: "India",
  price: "$10",
   duration: "7 Days",
      proposals: "10 to 50",
      tags: ["UI Design", "Graphic Design", "Web Design", "Figma"],
  },
  {
    id: 2,
    title: "Eye-Catching UI for Our Fitness App",
    location: "Egypt",
    price: "$40",
    duration: "5 Months",
    proposals: "50 to 100",
    tags: ["UI Design", "App Design"],
  },
  {
    id: 3,
    title: "Best Possiblity for UI",
    location: "Canada",
    price: "$45",
    duration: "3 Days",
    proposals: "20 to 30",
    tags: ["UI Design"],
  },
  {
    id: 4,
    title: "Accurate Designing",
    location: "India",
    price: "$5",
    duration: "! Day",
    proposals: "50 to 100",
    tags: ["UI Design", "App Design"],
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}> 
        <Text style={styles.greeting}>Hello There!</Text>
        <Image
          source={{ uri: 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-transparent-260nw-2463868845.jpg' }}
          style={styles.profilePic}
        />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search projects..."
        />
        <TouchableOpacity style={styles.filterIcon}>
          <Ionicons name="filter" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Recent Searches */}
      <View style={styles.recentSearches}>
        <ScrollView horizontal>
          {['UI Design', 'Landing Page', 'Banner Design'].map((tag) => (
            <TouchableOpacity key={tag} style={styles.searchTag}>
              <Text>{tag}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Project List */}
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <View style={styles.projectItem}>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.price} - {item.duration} - {item.proposals} Proposals</Text>
            <View style={styles.tags}>
              {item.tags.map((tag) => (
                <Text key={tag} style={styles.tag}>{tag}</Text>
              ))}
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  filterIcon: {
    padding: 7,
  },
  recentSearches: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchTag: {
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#e0e0e0',
  },
  projectItem: {
    padding: 16,
    marginBottom: 16,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 8,
  },
  location: {
    fontSize: 14,
    color: '#6a5acd',
    marginBottom: 4,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    marginTop: 8,
  },
  tag: {
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#f5deb3',
  },
});
