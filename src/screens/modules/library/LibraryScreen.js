import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColors } from '../../../store/slices/themeSlice';
import { Header, Card, Input, Button } from '../../../components';
import { Ionicons } from '@expo/vector-icons';

const books = [
  { id: '1', title: 'Data Structures', author: 'John Smith', available: true, isbn: '978-1234567890' },
  { id: '2', title: 'Algorithms', author: 'Jane Doe', available: false, isbn: '978-0987654321' },
  { id: '3', title: 'Database Systems', author: 'Bob Johnson', available: true, isbn: '978-1122334455' },
];

const LibraryScreen = ({ navigation }) => {
  const colors = useSelector(selectColors);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title="Library"
        subtitle="Search and borrow books"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Input
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search books..."
          icon={<Ionicons name="search" size={20} color={colors.textSecondary} />}
        />
        <ScrollView style={styles.booksList}>
          {books.map((book) => (
            <Card key={book.id}>
              <View style={styles.bookCard}>
                <View style={[styles.bookIcon, { backgroundColor: colors.primary + '20' }]}>
                  <Ionicons name="book" size={32} color={colors.primary} />
                </View>
                <View style={styles.bookDetails}>
                  <Text style={[styles.bookTitle, { color: colors.text }]}>{book.title}</Text>
                  <Text style={[styles.bookAuthor, { color: colors.textSecondary }]}>
                    by {book.author}
                  </Text>
                  <Text style={[styles.bookIsbn, { color: colors.textSecondary }]}>
                    ISBN: {book.isbn}
                  </Text>
                  <View style={[styles.statusBadge, { backgroundColor: book.available ? colors.success : colors.error }]}>
                    <Text style={styles.statusText}>
                      {book.available ? 'Available' : 'Borrowed'}
                    </Text>
                  </View>
                </View>
              </View>
              {book.available && (
                <Button title="Borrow" variant="outline" style={styles.borrowButton} />
              )}
            </Card>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  booksList: {
    flex: 1,
    marginTop: 8,
  },
  bookCard: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  bookIcon: {
    width: 64,
    height: 64,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  bookAuthor: {
    fontSize: 14,
    marginTop: 4,
  },
  bookIsbn: {
    fontSize: 12,
    marginTop: 2,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 8,
  },
  statusText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
  borrowButton: {
    marginTop: 8,
  },
});

export default LibraryScreen;
